'use client';
import React, { useState } from 'react';

export default function ContactForm(){
  const [form, setForm] = useState({name:'',phone:'',email:'',message:''});
  const [sent, setSent] = useState(false);

  function update(e:any){
    setForm({...form,[e.target.name]:e.target.value});
  }
  function submit(e:any){
    e.preventDefault();
    // TODO: wire to API
    setSent(true);
  }

  return (
    <div className="glass-card">
      <h3 className="mb-3">Schedule a Visit</h3>
      {sent ? (
        <div className="alert alert-success">Thank you — we will contact you shortly.</div>
      ) : (
        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input name="name" value={form.name} onChange={update} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input name="phone" value={form.phone} onChange={update} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="email" value={form.email} onChange={update} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" value={form.message} onChange={update} className="form-control" rows={4}></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success" type="submit">Schedule a Visit</button>
          </div>
        </form>
      )}
    </div>
  )
}
