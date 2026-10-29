import { FaUsers, FaTree, FaAward, FaMapMarkedAlt, FaHome } from 'react-icons/fa';

const stats = [
    {
        icon: FaUsers,
        count: 350,
        label: "Happy Families",
        suffix: "+",
        description: "Already living the Little England lifestyle"
    },
    {
        icon: FaTree,
        count: 3500,
        label: "No. of Acres",
        suffix: "+",
        description: "Nurturing nature, creating a legacy"
    },
    {
        icon: FaAward,
        count: 15,
        label: "Years of Legacy",
        suffix: "+",
        description: "Proudly shaping the Little England journey"
    },
    {
        icon: FaMapMarkedAlt,
        count: 1000,
        label: "Farmland Plots",
        suffix: "+",
        description: "Spacious, secure & well-planned plots"
    },
    {
        icon: FaHome,
        count: 15,
        label: "Projects",
        suffix: "+",
        description: "Completed & ongoing projects"
    },
];

function Counter({ end, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
    return <span>{end}{suffix}</span>;
}

export default function StatsSection() {
    return (
        <section
            className="py-5 position-relative stats-section-bg" style={{ minHeight: "500px" }}
        >
            <div className="container-fluid py-lg-5 position-relative">

                {/* Header */}
                <div className="text-center mb-4 mb-md-5 section-header-wrap">
                    <div className="d-flex justify-content-center align-items-center section-subtitle-wrap gap-2 mb-2">
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6 className="section-subheading mb-0">
                            Rooted in Nature. Built for Life.
                        </h6>
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>

                    <h2 className="section-heading mb-2 text-sanjeevani">
                        Little England in Numbers
                    </h2>

                    <div className="section-divider-bar mx-auto"></div>

                    <p className="text-muted max-w-2xl mx-auto" style={{ fontSize: '1.02rem' }}>
                        A thriving community. A greener tomorrow.
                    </p>
                </div>

                {/* Grid Cards of Stats */}
                <div className="row g-3 g-md-4 justify-content-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
                            <div
                                className="card border-0 shadow-sm p-3 p-md-4 text-center rounded-4 position-relative hover-lift bg-white w-100 d-flex flex-column"
                                style={{
                                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
                                }}
                            >
                                {/* Circle icon wrapper */}
                                <div
                                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-3 mb-md-4 mt-1 mt-md-2 stat-circle"
                                    style={{
                                        backgroundColor: '#114934',
                                        border: '3px solid #c5a059',
                                        color: '#c5a059',
                                        boxShadow: '0 4px 10px rgba(17, 73, 52, 0.2)'
                                    }}
                                >
                                    <stat.icon className="stat-icon" />
                                </div>

                                {/* Count value */}
                                <h2
                                    className="fw-bold mb-1 mb-md-2 text-dark"
                                    style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: 'clamp(1.45rem, 4vw, 2.1rem)'
                                    }}
                                >
                                    <Counter end={stat.count} suffix={stat.suffix} />
                                </h2>

                                {/* Label */}
                                <h5
                                    className="fw-bold mb-1 mb-md-2 text-uppercase"
                                    style={{
                                        fontSize: 'clamp(0.68rem, 1.8vw, 0.78rem)',
                                        color: '#114934',
                                        letterSpacing: '0.5px',
                                        lineHeight: '1.3',
                                        minHeight: '28px'
                                    }}
                                >
                                    {stat.label}
                                </h5>

                                {/* Divider line */}
                                <div className="mx-auto my-1.5 my-md-2" style={{ width: '20px', height: '1.5px', backgroundColor: '#c5a059' }}></div>

                                {/* Description */}
                                <p className="text-muted small lh-sm lh-md-relaxed mb-0 mt-auto" style={{ fontSize: 'clamp(0.68rem, 1.8vw, 0.8rem)' }}>
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
