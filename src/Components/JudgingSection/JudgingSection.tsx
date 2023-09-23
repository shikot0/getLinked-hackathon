import Image from 'next/image';
import { CTA } from '../Buttons/Buttons';
import './JudgingSection.css';

export default function JudgingSection() {
    return (
        <section id="judging-section" className='section-border'>
            <div className="section-content">
                <div className="judging-section-image-wrapper bounce">
                    <Image src="/images/two-people-standing.png" className="judging-section-image" fill sizes='(max-width: 600px) 25rem, 35rem' alt="a man and a woman standing next to each other"/>
                </div>
                <div className="judging-section-text-wrapper">
                    <h2>
                        Judging Criteria
                        <br />
                        <span className="purple">Key attributes</span>
                    </h2>
                    <div className="key-attributes-wrapper">
                        <p className="key-attribute">
                            <span className="purple">Innovation and Creativity: </span> 
                            Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                        </p>
                        <p className="key-attribute">
                            <span className="purple">Functionality: </span>
                            Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                        </p>
                        <p className="key-attribute">
                            <span className="purple">Impact and Relevance: </span>
                            Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                        </p>
                        <p className="key-attribute">
                            <span className="purple">Technical Complexity: </span>
                            Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                        </p>
                        <p className="key-attribute">
                            <span className="purple">Adherence to Hackathon Rules: </span>
                            Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                        </p>
                    </div>
                    <CTA>Read more</CTA>
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