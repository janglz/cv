import { Chip } from 'shared/ui/Chip';
import { hardSkills, interests, softSkills, tools } from './mock';
import styles from './styles.module.scss';
import { List } from 'shared/ui';

export const CVLayout = () => {
	return (
		<section className={styles.cv}>
			<h1 className={styles.cvTitle}>CV</h1>
			<span style={{ fontSize: '36px' }}>ROMAN MALIUZHINETS</span>
			<br />
			<br />
			<span className={styles.jobTitle}>
				<span style={{ fontSize: '24px' }}>Frontend developer</span>
			</span>
			<p>
				I'm looking for an opportunity to work with smart teammates in an
				international company. I'm fond of fine, useful, user-friendly
				interfaces.
			</p>
			<div className={styles.delimeter}>
				<span>
					<span style={{ fontSize: '18px', color: 'white' }}>
						remote / Serbia / Armenia
					</span>
				</span>
			</div>
			<div className={styles.cvWrapper}>
				<div className={styles.col1}>
					<article>
						<span
							style={{
								fontSize: '24px',
							}}
							className={styles.articleHeader}
						>
							Work expirience
						</span>

						<br />
						<br />
						<span className={styles.jobTitle}>
							<span style={{ fontSize: '20px' }}>frontend developer</span>
							<span style={{ fontStyle: 'italic' }}>sep 2021 - to present</span>
						</span>
						<span style={{ fontSize: '16px' }}>UBIC.tech</span>
						<br />
						<br />
						<List isVertical isDecorated>
							<span>Worked as in teams of 4-5 developers as alone</span>
							<span>Refactored existing app in FSD-style</span>
							<span>
								Integrated new libs and updated dependencies of existing app
							</span>
							<span>
								Fixed and completed the suspended contractor's project
							</span>
							<span>Migrated project from vue2 to react & next js</span>
						</List>
						<br />
						<span className={styles.jobTitle}>
							<span style={{ fontSize: '20px' }}>trainee</span>
							<span style={{ fontStyle: 'italic' }}>jun 2021 - aug 2021</span>
						</span>
						<span style={{ fontSize: '16px' }}>T1 - integration</span>

						<br />
						<br />
						<List isVertical isDecorated>
							<span>Created a SPA from scratch</span>
							<span>Worked in a team of 3 frontend developers</span>
						</List>
						<br />
						<span className={styles.jobTitle}>
							<span style={{ fontSize: '20px' }}>freelancer</span>
							<span style={{ fontStyle: 'italic' }}>sep 2020 - jun 2021</span>
						</span>
						<span style={{ fontSize: '16px' }}>self-employed</span>

						<br />
						<br />
						<List isVertical isDecorated>
							<span>
								Took projects (commercial and educational) to learn base of
								programming
							</span>
						</List>
					</article>
					<article>
						<span style={{ fontSize: '24px' }} className={styles.articleHeader}>
							Languages
						</span>

						<br />
						<br />
						<List isDecorated>
							<span className={styles.horizontalList}>English</span>
							<span>Russian</span>
						</List>
					</article>
					<article>
						<span style={{ fontSize: '24px' }} className={styles.articleHeader}>
							Personality
						</span>

						<br />
						<br />
						<List isDecorated isVertical>
							<span>Ready to relocate</span>
							<span>Prefer hybrid workflow (remote + office)</span>
							<span>My phobia is to become stupid</span>
						</List>
					</article>
				</div>
				<div className={styles.col2}>
					<article>
						<span style={{ fontSize: '24px' }} className={styles.articleHeader}>
							Tools
						</span>

						<br />
						<br />
						<div className={styles.chips}>
							{tools.map((tool, i) => (
								<Chip key={`tools${i}`}>{tool}</Chip>
							))}
						</div>
					</article>
					<article>
						<span style={{ fontSize: '24px' }} className={styles.articleHeader}>
							Hard skills
						</span>

						<br />
						<br />
						<div className={styles.chips}>
							{hardSkills.map((skill, i) => (
								<Chip key={`hards${i}`}>{skill}</Chip>
							))}
						</div>
					</article>
					<article>
						<span style={{ fontSize: '24px' }} className={styles.articleHeader}>
							Soft skills
						</span>

						<br />
						<br />
						<div className={styles.chips}>
							{softSkills.map((skill, i) => (
								<Chip key={`softs${i}`}>{skill}</Chip>
							))}
						</div>
					</article>
					<article>
						<span style={{ fontSize: '24px' }} className={styles.articleHeader}>
							Interests
						</span>

						<br />
						<br />
						<div className={styles.chips}>
							{interests.map((skill, i) => (
								<Chip key={`interests${i}`}>{skill}</Chip>
							))}
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};
