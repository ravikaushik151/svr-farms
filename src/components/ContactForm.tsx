"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import intlTelInput from "intl-tel-input";
// Try changing 'build' to 'dist'
import "intl-tel-input/dist/css/intlTelInput.css";
import Link from "next/link";

interface EnquiryModalProps {
  type?: "enquiry" | "download";
  button?: boolean;
  popup?: boolean;
  firstTimer?: number;
  intervalTimer?: number;
  buttonText?: React.ReactNode;
  textColor?: string;
  formClass?: string;
  formInputClass?: string;
  buttonClassName?: string;        // Used for the Form Submit Button
  triggerButtonClassName?: string; // NEW: Used for the Modal Trigger Button
  pdfFile?: string;
  sheet_id?: string;
}

type FormType = {
  name: string;
  email: string;
  message: string;
};

function ContactForm({
  type,
  pdfFile,
  submitButtonClassName,
  textColor,
  formInputClass,
}: {
  type: "enquiry" | "download";
  pdfFile?: string;
  submitButtonClassName: string;
  textColor?: string;
  formInputClass?: string;
}) {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<any>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: "in",
        separateDialCode: true,
      });
    }

    return () => {
      itiRef.current?.destroy();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof FormType;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const iti = itiRef.current;
    const rawValue = phoneInputRef.current?.value || "";
    const digitsOnly = rawValue.replace(/\D/g, "");

   const countryData = iti?.getSelectedCountry();
    const dialCode = countryData?.dialCode || "";

    const fullPhone = dialCode
      ? `+${dialCode}${digitsOnly}`
      : digitsOnly;

    if (!formData.name.trim()) return setError("Enter name");
    if (!formData.email.trim()) return setError("Enter email");
    if (!digitsOnly) return setError("Enter phone");
    if (!formData.message.trim()) return setError("Enter message");
    if (!agreed) return setError("Accept privacy policy");

    setLoading(true);

    try {
      const res = await fetch(
        "https://us-central1-email-js-1a09b.cloudfunctions.net/emailjs/submit-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify({
            ...formData,
            phone: fullPhone,
            subject: "SVR Farms - Website",
            form_source: window.location.href,
            client: "true",
            additionalRecipients: ["lokesh@imsolutions.mobi"],
          }),
        }
      );

      const text = await res.text();

      if (!text.includes("successfully")) {
        throw new Error("Failed");
      }

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      iti?.setNumber("");

      setTimeout(() => {
        window.location.href = "/thankyou";
      }, 1500);
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="alert alert-danger py-2 small">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success py-2 small">
          Sent Successfully
        </div>
      )}

      <div className="mb-3 ">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className={formInputClass || "form-control"}
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={formInputClass || "form-control"}
        />
      </div>

      <div className="mb-3">
        <input
          ref={phoneInputRef}
          type="tel"
          placeholder="Phone"
          className={formInputClass || "form-control"}
        />
      </div>

      <div className="mb-3">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Message"
          className={formInputClass || "form-control"}
        />
      </div>

      <div className="form-check mb-3 text-start">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="form-check-input bg-dark border-dark"
          id="privacy"
        />

        <label
          htmlFor="privacy"
          className={`form-check-label ${textColor || "text-dark"}`}
        >
          I agree to{" "}
                  <Link className="footer-link text-dark" href="/privacy-policy" target="_blank">
            privacy policy
          </Link>
        </label>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className={submitButtonClassName}
          disabled={loading}
          style={{marginTop:"15px"}}
        >
          {loading ? "Please Wait..." : "Submit"}
        </button>
      </div>


      <style jsx global>{`
        .iti {
          width: 100%;
        }

        .iti__country-list {
          z-index: 9999999;
        }
      `}</style>
    </form>
  );
}

export default function EnquiryModal({
  type = "enquiry",
  button = true,
  popup = false,
  firstTimer = 40,
  intervalTimer = 999,
  buttonText = "Enquire Now",
  textColor = "",
  buttonClassName = "btn btn-primary", 
  triggerButtonClassName = "btn btn-success", // Set your default class here
  formInputClass = "",
  pdfFile = "/brochure.pdf",
}: EnquiryModalProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!popup) return;

    const t1 = setTimeout(() => {
      setShowModal(true);
    }, firstTimer * 1000);

    const t2 = setInterval(() => {
      setShowModal(true);
    }, intervalTimer * 1000);

    return () => {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, [popup, firstTimer, intervalTimer]);

  if (!button && !popup) {
    return (
      <ContactForm
        type={type}
        pdfFile={pdfFile}
        submitButtonClassName={buttonClassName}
        textColor={textColor}
        formInputClass={formInputClass}
      />
    );
  }

  return (
    <>
      {/* UPDATE APPLIED HERE */}
      {button && (
        <button
          type="button"
          className={triggerButtonClassName} 
          onClick={() => setShowModal(true)}
        >
          {buttonText}
        </button>
      )}

      {showModal &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="modal fade show d-block"
            style={{
              background: "rgba(0,0,0,.6)",
              zIndex: 999999,
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0  fw-bold">
                  <h5 className="modal-title">
                    {type === "download"
                      ? "Download Brochure"
                      : "Enquire Now"}
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  />
                </div>

                <div className="modal-body">
                  <ContactForm
                    type={type}
                    pdfFile={pdfFile}
                    submitButtonClassName={buttonClassName} // The submit button keeps the original class
                    textColor={textColor}
                    formInputClass={formInputClass}
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}