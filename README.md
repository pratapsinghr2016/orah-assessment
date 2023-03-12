## Orah assessment

**Objective**

> To create a demo application highlighting the basic features which are required in an academic atmosphere like a school, college, or university
> This application will include local data management and using that we'll implement the roll management mini application better for the B2B business modal
> Showcase best development mannerisms and coding style which could be a replica of a production-level application
> Showcase some optimizing front-end mechanism like **debouncing, caching, lazy-loading, global state management & pagination**
> Following a scalable design system

**Tech stack used**

- Typescript
  - For static type checking
- Vite
  - Rust-based highly optimized bundler
- Styled-component
  - To follow the custom yet adaptable design-system
- NPM
  - As a node package manager
- Material-UI
  - To use inbuild front-end components
- Redux-js toolkit
  - To maintain a global state for storage & retrieving the consistency in data across the application depending on redux subscription to the respective component

**General User-flow**
[![image](https://www.linkpicture.com/q/Seq-diagram-Seq-1.jpg)](https://www.linkpicture.com/view.php?img=LPic640dc676474af1691639560)

**Profiler performance report**

[![image](https://www.linkpicture.com/q/ssssssssssss.jpg)](https://www.linkpicture.com/view.php?img=LPic640dc869e65591597174691)

Points to be noted from the above profiler's report:

- It's lab data hence the ground data will be even more lagging because of certain other performance-affecting parameters like server speed, user location, device & device configuration, transaction cost due to ISP in the respective geographical location, etc.
- The above visible that
  - commit phase lasts at 100 ms i.e 0.1 s
  - render time required is 70.8 ms
- An ideal render time should be ~33.33 ms because of the human eye can not notice the glitch unless the pixel paint process is for 30 FPS. This can be improved with the SSR technique, but CSR is still fine for it because of the continuous user interaction involved with an application.
- But as per the performance matrix visible in the above image, the majority highlight is the Material UI component (V4), and that too specifically with `withStyles()` which is an API to use MUI's style engine. The style engine is improved with V5. For more details [Click here](https://mui.com/material-ui/migration/migration-v4/)
- In my opinion, we can fix that by just relying on [styled-components](https://styled-components.com/) as it will reduce bundle size, optimize CSR & brings a lightweight design system tool that is entirely in the control of the developer.

**Other traits**

- Design system: obtained from styled-component & MUI (V4)

**POI (Points of improvement)**

- Folder structure is not optimum i.e atomic structure can be implemented
- Module export can be improved with a single point of entry in a file
- More modularity can be obtained
- Performance can be improved
- If the application would have a chance to scale then API caching by RTK could be more helpful

**Local setup**

    1) clone the project
    2) you must have node-js installed on your PC
    3) move to the correct directory
    4) npm i
    5) npm run start

**Author**
_Name: Rajat Pratap Singh_
_E-mail: pratapsinghr2016@gmail.com_
_Linkedin: [Click here](https://www.linkedin.com/in/rajat-pratap-singh-sse/)_
_Resume:[Click here](https://drive.google.com/file/d/1pik0LQJyyrRmlpT_U_fPuulAvap4OW27/view?usp=sharing)_
