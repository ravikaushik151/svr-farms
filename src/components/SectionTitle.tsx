import { Container, Row, Col } from 'react-bootstrap';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    alignment?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, alignment = 'center' }: SectionTitleProps) {
    return (
        <div className={`text-${alignment} mb-5`}>
            {subtitle && <h6 className="section-subheading mb-2">{subtitle}</h6>}
            <h2 className="section-heading mb-3">{title}</h2>
            <div className={`d-inline-block bg-sanjeevani mt-2 ${alignment === 'center' ? 'mx-auto' : ''}`} style={{ width: '60px', height: '4px' }}></div>
        </div>
    );
}
