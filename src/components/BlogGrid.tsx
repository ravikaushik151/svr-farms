"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { posts, Post } from '@/data/posts';
import SectionTitle from '@/components/SectionTitle';
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ITEMS_PER_PAGE = 9;

const BlogGrid: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Filter posts based on search query
    const filteredPosts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return posts;

        return posts.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.text.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

    // Reset page to 1 when search query changes
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setCurrentPage(1);
    };

    // Get posts for current page
    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    // Handle page change with smooth scroll to top of blog section
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            const element = document.getElementById('blog-grid-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    // Generate page numbers to display
    const pageNumbers = useMemo(() => {
        const pages = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, currentPage + 2);

            if (currentPage <= 3) {
                start = 1;
                end = maxVisible;
            } else if (currentPage >= totalPages - 2) {
                start = totalPages - maxVisible + 1;
                end = totalPages;
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        }
        return pages;
    }, [currentPage, totalPages]);

    return (
        <div id="blog-grid-section" className="py-5 bg-light">
            <Container>
                <SectionTitle title="Our Blog" subtitle="Latest News & Updates" />

                {/* Search Bar Row */}
                <Row className="justify-content-center mb-5 mt-4">
                    <Col md={8} lg={6}>
                        <InputGroup className="shadow-sm border rounded-pill overflow-hidden bg-white px-3 py-1">
                            <InputGroup.Text className="bg-transparent border-0 text-muted">
                                <FiSearch size={20} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search our articles..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="border-0 shadow-none py-2 text-dark font-jost"
                                style={{ fontSize: '1rem', outline: 'none' }}
                            />
                            {searchQuery && (
                                <InputGroup.Text
                                    className="bg-transparent border-0 text-muted cursor-pointer hover-text-dark"
                                    onClick={handleClearSearch}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <FiX size={18} />
                                </InputGroup.Text>
                            )}
                        </InputGroup>
                        {searchQuery && (
                            <div className="text-center mt-3 text-muted">
                                Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} matching &quot;{searchQuery}&quot;
                            </div>
                        )}
                    </Col>
                </Row>

                {/* Grid of Cards */}
                {paginatedPosts.length > 0 ? (
                    <>
                        <Row className="g-4">
                            {paginatedPosts.map((post) => (
                                <Col key={post.id} xs={12} md={6} lg={4}>
                                    <Card className="shadow-sm border-0 h-100 hover-lift overflow-hidden d-flex flex-column rounded-3 bg-white">
                                        <div className="overflow-hidden position-relative" style={{ height: '220px' }}>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-fit-cover hover-zoom"
                                                priority={post.id <= 3}
                                            />
                                            <div className="position-absolute top-0 start-0 m-3 bg-sanjeevani text-white px-3 py-1 rounded-pill font-jost text-uppercase fw-semibold" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                                                {post.category}
                                            </div>
                                        </div>

                                        <Card.Body className="p-4 d-flex flex-column flex-grow-1">
                                            <div className="text-muted small mb-2 font-jost">{post.date}</div>
                                            <Card.Title className="fw-bold text-dark text-start title-clamp-2 mb-3 fs-5" style={{ lineHeight: '1.4' }}>
                                                {post.title}
                                            </Card.Title>
                                            <Card.Text className="text-start text-clamp-3 text-muted mb-4 font-jost" style={{ fontSize: '0.95rem' }}>
                                                {post.text}
                                            </Card.Text>
                                            <div className="mt-auto d-flex justify-content-start">
                                                <a href={`/blogs/${post.slug}`} className="read-more-link text-sanjeevani fw-bold text-decoration-none border-bottom border-success pb-1">
                                                    Read More
                                                </a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        {/* Pagination Row */}
                        {totalPages > 1 && (
                            <Row className="mt-5 pt-4">
                                <Col className="d-flex justify-content-center">
                                    <nav aria-label="Blog pagination">
                                        <ul className="pagination custom-pagination gap-2">
                                            {/* Previous Button */}
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button
                                                    className="page-link rounded-circle border-0 d-flex align-items-center justify-content-center"
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                    aria-label="Previous page"
                                                    style={{ width: '42px', height: '42px' }}
                                                >
                                                    <FiChevronLeft size={20} />
                                                </button>
                                            </li>

                                            {/* Page Number Buttons */}
                                            {pageNumbers.map(page => (
                                                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                                    <button
                                                        className="page-link rounded-circle border-0 d-flex align-items-center justify-content-center fw-semibold font-jost"
                                                        onClick={() => handlePageChange(page)}
                                                        style={{ width: '42px', height: '42px' }}
                                                    >
                                                        {page}
                                                    </button>
                                                </li>
                                            ))}

                                            {/* Next Button */}
                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <button
                                                    className="page-link rounded-circle border-0 d-flex align-items-center justify-content-center"
                                                    onClick={() => handlePageChange(currentPage + 1)}
                                                    disabled={currentPage === totalPages}
                                                    aria-label="Next page"
                                                    style={{ width: '42px', height: '42px' }}
                                                >
                                                    <FiChevronRight size={20} />
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </Col>
                            </Row>
                        )}
                    </>
                ) : (
                    <div className="text-center py-5">
                        <h4 className="text-muted mb-3 font-jost">No articles found</h4>
                        <p className="text-secondary">Try adjusting your search terms or clearing the filter.</p>
                        <button className="btn btn-primary mt-3" onClick={handleClearSearch}>
                            Clear Search
                        </button>
                    </div>
                )}
            </Container>

            <style jsx global>{`
                .font-jost { font-family: var(--font-jost), sans-serif; }
                
                .hover-zoom {
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                }

                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(17, 73, 52, 0.1) !important;
                }

                .card:hover .hover-zoom {
                    transform: scale(1.08);
                }

                .text-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .title-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    min-height: 50px;
                }

                /* Pagination Custom Styling */
                .custom-pagination .page-link {
                    background-color: #f8f9fa;
                    color: #495057;
                    transition: all 0.2s ease-in-out;
                }

                .custom-pagination .page-link:hover {
                    background-color: #e9ecef;
                    color: #114934;
                }

                .custom-pagination .page-item.active .page-link {
                    background-color: #114934 !important;
                    color: white !important;
                    box-shadow: 0 4px 10px rgba(17, 73, 52, 0.2);
                }

                .custom-pagination .page-item.disabled .page-link {
                    background-color: #e9ecef;
                    color: #adb5bd;
                    opacity: 0.6;
                }

                .read-more-link {
                    transition: color 0.2s ease, border-color 0.2s ease;
                }
                .read-more-link:hover {
                    color: var(--sanjeevani-green-dark) !important;
                    border-color: var(--sanjeevani-green-dark) !important;
                }
                
                .cursor-pointer {
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default BlogGrid;
