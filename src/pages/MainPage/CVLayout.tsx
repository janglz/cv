import { Chip } from 'shared/ui/Chip';
import { hardSkills, interests, softSkills, tools } from './mock';
import styles from './styles.module.scss';
import { List } from 'shared/ui';

export const CVLayout = () => {
	return (
		<section className={styles.cv}>
			<h1 className={styles.cvTitle}>CV</h1>
			<h1>ROMAN MALIUZHINETS</h1>
			<span className={styles.jobTitle}>
				<h2>frontend developer</h2>
			</span>
			<div className={styles.delimeter}>
				<i>
					<h3>remote / Serbia / Armenia</h3>
				</i>
			</div>
			<div className={styles.cvWrapper}>
				<div className={styles.col1}>
					<article>
						<h2 className={styles.articleHeader}>work expirience</h2>
						<span className={styles.jobTitle}>
							<h3>frontend developer</h3>
							<i>sep 2021 - to present</i>
						</span>
						<h4>UBIC.tech</h4>
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
							<h3>trainee</h3>
							<i>jun 2021 - aug 2021</i>
						</span>
						<h4>T1 - integration</h4>
						<List isVertical isDecorated>
							<span>Created a SPA from scratch</span>
							<span>Worked in a team of 3 frontend developers</span>
						</List>
						<br />
						<span className={styles.jobTitle}>
							<h3>freelancer</h3>
							<i>sep 2020 - jun 2021</i>
						</span>
						<h4>self-employed</h4>
						<List isVertical isDecorated>
							<span>
								Took projects (commercial and educational) to learn base of
								programming
							</span>
						</List>
					</article>
					<article>
						<h2 className={styles.articleHeader}>languages</h2>
						<List isDecorated>
							<span className={styles.horizontalList}>english</span>
							<span>russian</span>
						</List>
					</article>
					<article>
						<h2 className={styles.articleHeader}>personality</h2>
						<List isDecorated isVertical>
							<span>ready to relocate</span>
							<span>my phobia is to become stupid</span>
						</List>
					</article>
				</div>
				<div className={styles.col2}>
					<article>
						<h2 className={styles.articleHeader}>tools</h2>
						<div className={styles.chips}>
							{tools.map((tool, i) => (
								<Chip key={`tools${i}`}>{tool}</Chip>
							))}
						</div>
					</article>
					<article>
						<h2 className={styles.articleHeader}>hard skills</h2>
						<div className={styles.chips}>
							{hardSkills.map((skill, i) => (
								<Chip key={`hards${i}`}>{skill}</Chip>
							))}
						</div>
					</article>
					<article>
						<h2 className={styles.articleHeader}>soft skills</h2>
						<div className={styles.chips}>
							{softSkills.map((skill, i) => (
								<Chip key={`softs${i}`}>{skill}</Chip>
							))}
						</div>
					</article>
					<article>
						<h2 className={styles.articleHeader}>interests</h2>
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
