import Image from 'next/image';
import './TimelineSection.css';

export default function() {
    return (
        <section id="timeline-section">
            <div className="section-content">
                <div className="timeline-section-text-wrapper">
                    <h2>Timeline</h2>
                    <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                </div>
                <div className="desktop-timeline-wrapper">
                    <div className="timeline-detail right">
                        <h3>
                            <span className="purple">Hackathon Announcement</span>
                        </h3>
                        <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                    </div>
                    <div className="timeline-detail">
                        <h3>
                            <span className="purple">November 18, 2023</span>
                        </h3>
                    </div>
                    <div className="timeline-detail right">
                        <h3>
                            <span className="purple">November 18, 2023</span>
                        </h3>
                    </div>
                    <div className="timeline-detail">
                        <h3>
                            <span className="purple">Teams Registration Begins</span>
                        </h3>
                        <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register.</p>
                    </div>
                    <div className="timeline-detail right">
                        <h3>
                            <span className="purple">Teams Registration ends</span>
                        </h3>
                        <p>Interested Participants are no longer allowed to register</p>
                    </div>
                    <div className="timeline-detail">
                        <h3>
                            <span className="purple">November 18, 2023</span>
                        </h3>
                    </div>
                    <div className="timeline-detail right">
                        <h3>
                            <span className="purple">November 18, 2023</span>
                        </h3>
                    </div>
                    <div className="timeline-detail">
                        <h3>
                            <span className="purple">Announcement of the accepted teams and ideas</span>
                        </h3>
                        <p>All teams whose idea has been accepted into the getlinked tech hackathon 1.0 2023 are formally announced.</p>
                    </div>
                    <div className="timeline-detail right">
                        <h3>
                            <span className="purple">Getlinked Hackathon 1.0 officially Begins</span>
                        </h3>
                        <p>Accepted teams can now proceed to build their ground-breaking skill driven solutions</p>
                    </div>
                    <div className="timeline-detail">
                        <h3>
                            <span className="purple">November 18, 2023</span>
                        </h3>
                    </div>

                    <div className="timeline-detail right">
                        <h3>
                            <span className="purple">November 18, 2023</span>
                        </h3>
                    </div>
                    <div className="timeline-detail">
                        <h3>
                            <span className="purple">Demo Day</span>
                        </h3>
                        <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day.</p>
                    </div>

                    <div className="timeline">
                        <h3 className="timeline-number">1</h3>
                        <h3 className="timeline-number">2</h3>
                        <h3 className="timeline-number">3</h3>
                        <h3 className="timeline-number">4</h3>
                        <h3 className="timeline-number">5</h3>
                        <h3 className="timeline-number">6</h3>
                    </div>
                </div>

                <div className="mobile-timeline-wrapper">
                    <div className="timeline-detail">
                        <div className="divider"></div>
                        <p className="timeline-detail-number">1</p>
                        <div className="timeline-text-wrapper">
                            <h3 className="timeline-heading purple">Hackathon Announcement</h3>
                            <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register.</p>
                            <b className="timeline-date purple">November 18, 2023</b>
                        </div>
                    </div>
                    <div className="timeline-detail">
                        <div className="divider"></div>
                        <p className="timeline-detail-number">2</p>
                        <div className="timeline-text-wrapper">
                            <h3 className="timeline-heading purple">Teams Registration begins</h3>
                            <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2024 by proceeding to register.</p>
                            <b className="timeline-date purple">November 18, 2023</b>
                        </div>
                    </div>
                    <div className="timeline-detail">
                        <div className="divider"></div>
                        <p className="timeline-detail-number">3</p>
                        <div className="timeline-text-wrapper">
                            <h3 className="timeline-heading purple">Teams Registration ends</h3>
                            <p>Interested participants are no longer allowed to register</p>
                            <b className="timeline-date purple">November 18, 2023</b>
                        </div>
                    </div>
                    <div className="timeline-detail">
                        <div className="divider"></div>
                        <p className="timeline-detail-number">4</p>
                        <div className="timeline-text-wrapper">
                            <h3 className="timeline-heading purple">Announcement of the accepted teams and ideas</h3>
                            <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced.</p>
                            <b className="timeline-date purple">November 18, 2023</b>
                        </div>
                    </div>
                    <div className="timeline-detail">
                        <div className="divider"></div>
                        <p className="timeline-detail-number">5</p>
                        <div className="timeline-text-wrapper">
                            <h3 className="timeline-heading purple">Getlinked Hackathon 1.0 Officially Begins</h3>
                            <p>Accepted teams can now proceed to build their ground breaking skill driven solutions.</p>
                            <b className="timeline-date purple">November 18, 2023</b>
                        </div>
                    </div>
                    <div className="timeline-detail">
                        <div className="divider"></div>
                        <p className="timeline-detail-number">6</p>
                        <div className="timeline-text-wrapper">
                            <h3 className="timeline-heading purple">Demo Day</h3>
                            <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day.</p>
                            <b className="timeline-date purple">November 18, 2023</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lens-flare">
                <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
            </div>
            <div className="lens-flare">
                <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
            </div>
        </section>
    )
}