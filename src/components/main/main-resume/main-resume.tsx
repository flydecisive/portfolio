import { User } from '../../user/user';
import { Title } from '../../title/title';
import { MainResumeElement } from './main-resume-element/main-resume-element';
import educationLogo from '../../../assets/img/icon-park-outline_degree-hat.svg';
import experienceLogo from '../../../assets/img/humbleicons_briefcase.svg';
import { education } from '../../../consts/consts';
import { experience } from '../../../consts/consts';
import { Skill } from '../../skill/skill';
import { hardSkills } from '../../../consts/consts';
import { softSkills } from '../../../consts/consts';

import styles from './main-resume.module.css';

export function MainResume() {
  return (
    <div className={styles.wrapper}>
      <User />
      <div className={styles.content}>
        <Title text={'Резюме'} />
        <div className={styles.elements}>
          <MainResumeElement
            primary={[true, false]}
            heading={'Образование'}
            logo={educationLogo}
            content={education}
          />
          <MainResumeElement
            primary={[false, true]}
            heading={'Работа'}
            logo={experienceLogo}
            content={experience}
          />
        </div>
        <div className={styles.skills}>
          <Skill title="Hard Skills" skills={hardSkills}></Skill>
          <Skill title="Soft Skills" skills={softSkills}></Skill>
        </div>
      </div>
    </div>
  );
}
