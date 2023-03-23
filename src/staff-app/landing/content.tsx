import React from "react";
import styled from "styled-components";

const S = {
  Section: styled.section`
    margin: auto;
    padding: 0 1rem;
    max-width: 100vw;
    font-size: 1rem;
    color: #333;
    > h1 {
      font-weight: 800;
      font-size: 40px;
      text-decoration: underline;
    }
  `,
  Quote: styled.p`
    border: 1px solid #fff;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
  `,
  ImageContainer: styled.div`
    display: flex;
    align-items: center;
    > a {
      padding: 15px;
      display: inline;
      text-align: center;
    }
    > img {
      border: 2px solid;
    }
  `,
  Code: styled.code`
    background-color: #28282b;
    padding: 15px;
    color: white;
    width: 98%;
    display: flex;
    flex-direction: column;
  `,
};

const Content = () => {
  return (
    <S.Section>
      <h1>Orah assessment</h1>

      <h2>
        <strong>Objective</strong>
      </h2>

      <S.Quote>
        To create a demo application highlighting the basic features which are
        required in an academic atmosphere like a school, college, or university
        This application will include local data management and using that
        we&#39;ll implement the roll management mini application better for the
        B2B business modal Showcase best development mannerisms and coding style
        which could be a replica of a production-level application Showcase some
        optimizing front-end mechanism like
        <strong>
          {" "}
          debouncing, caching, lazy-loading, global state management &amp;
          pagination
        </strong>
        . Following a scalable design system
      </S.Quote>

      <h2>
        <strong>Tech stack used</strong>
      </h2>
      <S.Quote>
        <ul>
          <li>
            Typescript
            <ul>
              <li>For static type checking</li>
            </ul>
          </li>
          <li>
            Vite
            <ul>
              <li>Rust-based highly optimized bundler</li>
            </ul>
          </li>
          <li>
            Styled-component
            <ul>
              <li>To follow the custom yet adaptable design-system</li>
            </ul>
          </li>
          <li>
            NPM
            <ul>
              <li>As a node package manager</li>
            </ul>
          </li>
          <li>
            Material-UI
            <ul>
              <li>To use inbuild front-end components</li>
            </ul>
          </li>
          <li>
            Redux-js toolkit
            <ul>
              <li>
                To maintain a global state for storage &amp; retrieving the
                consistency in data across the application depending on redux
                subscription to the respective component
              </li>
            </ul>
          </li>
        </ul>
      </S.Quote>
      <h2>
        <strong>General User-flow</strong>
      </h2>
      <S.ImageContainer>
        <a
          target="_blank"
          href="https://www.linkpicture.com/view.php?img=LPic640dc676474af1691639560"
        >
          <img
            style={{ border: "5px solid #333", borderRadius: 20 }}
            width={"60%"}
            height={"25%"}
            src="https://www.linkpicture.com/q/Seq-diagram-Seq-1.jpg"
            alt="image"
          />
        </a>
      </S.ImageContainer>
      <h2>
        <strong>Profiler performance report</strong>
      </h2>
      <S.ImageContainer>
        <a
          target="_blank"
          href="https://www.linkpicture.com/q/ssssssssssss.jpg"
        >
          <img
            style={{ border: "5px solid #333", borderRadius: 20 }}
            width={"80%"}
            height={"30%"}
            src="https://www.linkpicture.com/q/ssssssssssss.jpg"
            alt="image"
          />
        </a>
      </S.ImageContainer>
      <h3>
        <strong>
          Points to be noted from the above profiler&#39;s report:
        </strong>
      </h3>
      <S.Quote>
        <ul>
          <li>
            It&#39;s lab data hence the ground data will be even more lagging
            because of certain other performance-affecting parameters like
            server speed, user location, device &amp; device configuration,
            transaction cost due to ISP in the respective geographical location,
            etc.
          </li>
          <li>
            The above visible that
            <ul>
              <li>commit phase lasts at 100 ms i.e 0.1 s</li>
              <li>render time required is 70.8 ms</li>
            </ul>
          </li>
          <li>
            An ideal render time should be ~33.33 ms because of the human eye
            can not notice the glitch unless the pixel paint process is for 30
            FPS. This can be improved with the SSR technique, but CSR is still
            fine for it because of the continuous user interaction involved with
            an application.
          </li>
          <li>
            But as per the performance matrix visible in the above image, the
            majority highlight is the Material UI component (V4), and that too
            specifically with
            <code>withStyles()</code> which is an API to use MUI&#39;s style
            engine. The style engine is improved with V5. For more details
            <a href="https://mui.com/material-ui/migration/migration-v4/">
              Click here
            </a>
          </li>
          <li>
            In my opinion, we can fix that by just relying on{" "}
            <a href="https://styled-components.com/">styled-components</a> as it
            will reduce bundle size, optimize CSR &amp; brings a lightweight
            design system tool that is entirely in the control of the developer.
          </li>
        </ul>
      </S.Quote>
      <h2>
        <strong>Other traits</strong>
      </h2>
      <S.Quote>
        <ul>
          <li>Design system: obtained from styled-component &amp; MUI (V4)</li>
        </ul>
      </S.Quote>
      <h2>
        <strong>POI (Points of improvement)</strong>
      </h2>
      <S.Quote>
        <ul>
          <li>
            Folder structure is not optimum i.e atomic structure can be
            implemented
          </li>
          <li>
            Module export can be improved with a single point of entry in a file
          </li>
          <li>More modularity can be obtained</li>
          <li>Performance can be improved</li>
          <li>Write test cases</li>
          <li>Improve static typing</li>
          <li>
            If the application would have a chance to scale then API caching by
            RTK could be more helpful
          </li>
        </ul>
      </S.Quote>
      <h2>
        <strong>Local setup</strong>
      </h2>

      <S.Code>
        <span>1) clone the project</span>
        <span>2) you must have node-js installed on your PC </span>
        <span>3) move to the correct directory</span>
        <span>4) npm i</span>
        <span>5) npm run start</span>
      </S.Code>

      <h2>
        <strong>Author</strong>
      </h2>
      <S.Quote style={{ display: "flex", flexDirection: "column" }}>
        <em>Name: Rajat Pratap Singh</em>
        <em>E-mail: pratapsinghr2016@gmail.com</em>
        <em>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/rajat-pratap-singh-sse/">
            Click here
          </a>
        </em>
        <em>
          Resume:
          <a href="https://drive.google.com/file/d/1pik0LQJyyrRmlpT_U_fPuulAvap4OW27/view?usp=sharing">
            Click here
          </a>
        </em>
      </S.Quote>
    </S.Section>
  );
};

export default Content;
