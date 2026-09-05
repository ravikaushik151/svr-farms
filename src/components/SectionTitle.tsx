import { Container, Row, Col } from 'react-bootstrap';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    alignment?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, alignment = 'center' }: SectionTitleProps) {
    const alignClass = alignment === 'left' ? 'text-center text-lg-start' : alignment === 'right' ? 'text-center text-lg-end' : 'text-center';
    const justifyClass = alignment === 'left' ? 'justify-content-center justify-content-lg-start' : alignment === 'right' ? 'justify-content-center justify-content-lg-end' : 'justify-content-center';
    const blockAlignClass = alignment === 'left' ? 'align-items-center align-items-lg-start' : alignment === 'right' ? 'align-items-center align-items-lg-end' : 'align-items-center';

    const headingWrapClass = alignment === 'left' ? 'align-items-center align-items-lg-start text-center text-lg-start' : alignment === 'right' ? 'align-items-center align-items-lg-end text-center text-lg-end' : 'align-items-center text-center';
    const dividerClass = alignment === 'left' ? 'ms-lg-0 mx-auto' : alignment === 'right' ? 'me-lg-0 mx-auto' : 'mx-auto';

    return (
        <div className={`${alignClass} mb-4 mb-md-5 section-header-wrap d-flex flex-column ${blockAlignClass}`}>
            {subtitle && (
                <div className={`d-flex align-items-center ${justifyClass} section-subtitle-wrap gap-2 mb-2`}>
                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    <h6 className="section-subheading mb-0">{subtitle}</h6>
                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                </div>
            )}
            <div className={`d-inline-flex flex-column ${headingWrapClass}`}>
                <h2 className="section-heading mb-2">{title}</h2>
                <div className={`section-divider-bar ${dividerClass}`}></div>
            </div>
        </div>
    );
}
