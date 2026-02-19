'use client';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description?: string;
    image?: string;
    link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
    return (
        <Card className="h-100 shadow-sm border-0 hover-lift">
            <div className="bg-light" style={{ height: '200px' }}>
                <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                    <img src={image || "https://placehold.co/600x400?text=Project+Image+600x400"} alt={title} className="w-100 h-100 object-fit-cover" />
                </div>
            </div>
            <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="text-muted small">
                    {description || "Experience the best of managed farmland with luxury amenities and sustainable living."}
                </Card.Text>
                <Link href={link} passHref legacyBehavior>
                    <Button variant="outline-primary" className="w-100">View Project</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
