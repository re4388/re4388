const WebsiteUrl = 'https://ben-notes.vercel.app/#/repos';
// const TwitterUrl = 'https://twitter.com/re4388';
const LinkedInUrl = 'https://www.linkedin.com/in/pinweihu/';
const MediumUrl = 'https://medium.com/@hupinwei';
const DevToUrl = 'https://dev.to/re4388';
const badgeHeight = '25';

// remove twitter since I seldom use
// const TwitterBadge = `[<img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&\
//     style=for-the-badge&logo=twitter&logoColor=white" height=${badgeHeight}>](${TwitterUrl})`;

const linkedInBadge = `[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&\
    style=for-the-badge&logo=linkedin&logoColor=white" height=${badgeHeight}>](${LinkedInUrl})`;

const MediumBadge = `[<img src="https://img.shields.io/badge/medium-%2312100E.svg?&\
    style=for-the-badge&logo=medium&logoColor=white" height=${badgeHeight}>](${MediumUrl})`;

const DevToBadge = `[<img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&\
    style=for-the-badge&logo=dev-dot-to&logoColor=white" height=${badgeHeight}>](${DevToUrl})`;

export const welcomeMessage = `👋 Hi, Ben here, you can know me by checking below links!  :).
    \n\n 😁 [Check out my website](${WebsiteUrl})
    \n\n ${linkedInBadge}${MediumBadge} ${DevToBadge}
    \n\n
    \n\n
    `;
