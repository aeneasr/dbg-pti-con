// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

//
const images = {
  circle: require("../assets/circle-ci.gif"),
  dropbox: require("../assets/dropbox.gif"),
  quickstart: require("../assets/quickstart.png"),
  substitution: [
    require("../assets/token-substitution-1.png"),
    require("../assets/token-substitution-2.png"),
    require("../assets/token-substitution-3.png")
  ]
};
//
preloader(images);

const theme = createTheme({
  primary: 'black',
  secondary: "#ff4081",
  important: '#FFC43D'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme} bgColor="black">
        <Deck transition={["zoom", "slide"]} transitionDuration={500} bgColor="black">

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              OAuth2 and OpenID Connect in real life
            </Heading>
            <Appear>
              <Heading size={4} caps fit textColor="black">
                OpenID Connect extends OAuth2
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Before we jump ahead
            </Heading>
            <Appear>
              <Heading size={4} caps fit textColor="white">
                Please install docker
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} caps fit textColor="white">
                Google "Docker Toolbox" and install it
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.circle} transition={["fade"]}>
          </Slide>

          <Slide bgImage={images.dropbox} transition={["fade"]}>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="secondary">
                What happened here?
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="black" textColor="secondary">
            <List>
              <Appear><ListItem>Circle CI (not affiliated with GitHub) needs access to a user's repositories.</ListItem></Appear>
              <Appear><ListItem>Circle CI redirects the user agent (chrome) to GitHub, when pressing sign in.</ListItem></Appear>
              <Appear><ListItem>GitHub asks the user if it is ok to give Circle CI access to his
                data.</ListItem></Appear>
              <Appear><ListItem>GitHub redirects the user agent back to Circle CI, passing along a Time Based One Time
                Password (TOTP).</ListItem></Appear>
              <Appear><ListItem>Circle CI is now allowed to access GitHub APIs on behalf of the user, using the
                TOTP.</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              NOTES
            </Heading>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Appear fid="1"><Text textColor="white">I was able to decide which repositories Circle CI will have access
              to.</Text></Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Appear fid="1"><Text textColor="white">Do not confuse OAuth2 with an authentication method, although it
              looked like one.</Text></Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Appear fid="1"><Text textColor="white">Using OAuth2 for authentication through a third party requires
              in-depth knowledge of OAuth2.</Text></Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Authentication
            </Heading>
            <Appear><Heading size={4} textColor="white">Passport control, validating your identity</Heading></Appear>
            <Appear><Heading size={2} textColor="important">NOT OAuth2!</Heading></Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Authorization
            </Heading>
            <Appear><Heading size={4} textColor="white">Customs decide evaluate your properties (bags) and decide if you're allowed to enter</Heading></Appear>
            <Appear><Heading size={2} textColor="important">NOT OAuth2!</Heading></Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Delegation
            </Heading>
            <Appear><Heading size={6} textColor="white">Authentication: Giving your passport to your twin-brother</Heading></Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              OpenID Connect: Delegation of authentication!
            </Heading>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Delegation
            </Heading>
            <Appear><Heading size={6} textColor="white">Authorization: Giving your bags to your twin-brother for customs inspection</Heading></Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              OAuth2: Delegation of authorization!
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="black" textColor="secondary">
            <List>
              <Appear><ListItem>OAuth2 does not replace authentication nor authorization in your current
                environment.</ListItem></Appear>
              <Appear><ListItem>OAuth2 is a framework of work flows and extends your current
                environment's interoperability.</ListItem></Appear>
              <Appear><ListItem>OAuth2 makes sense when opening up APIs, otherwise it doesn't.</ListItem></Appear>
              <Appear><ListItem>Due to it's nature (using opaque short living credentials), OAuth2 introduces a secure
                flow for mobile clients.</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Let's get hacking...
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="black" textColor="white">
            <Heading size={1} caps fit textColor="secondary">
              ... with ... Hydra?
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <List>
              <Appear><ListItem>Scalable, low-latency, in memory Access Control, OAuth2, and OpenID Connect
                layer.</ListItem></Appear>
              <Appear><ListItem>Runs on top of existing authentication and authorization.</ListItem></Appear>
              <Appear><ListItem>1700 stars, trending multiple times on hackernews, reddit, GitHub,
                ...</ListItem></Appear>
              <Appear><ListItem>Open Source, written in Google Go and supported by the Ludwig-Maximilians-Universität
                München.</ListItem></Appear>
              <Appear><ListItem>Fast growing ecosystem and community.</ListItem></Appear>
              <Appear><ListItem>Written and designed by me.</ListItem></Appear>
              <Appear><ListItem>Is now a part of cloud native company Ory GmbH.</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]}>
            <Image src={images.quickstart} />
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/install")}
            ranges={[
              { loc: [0, 1], note: 'If you don\'t have git, download the zip package from github.com/ory-am/hydra' },
              { loc: [2, 3] },
              { loc: [4, 5], note: 'SYSTEM_SECRET: This is used to encrypt data at rest' },
              { loc: [4, 5], note: 'DOCKER_IP: Only required when using docker inside a VM' },
              { loc: [4, 5] },
              { loc: [8, 9], note: 'Check if the name is correct' },
              { loc: [11, 12], note: 'Hack: SSH into docker - saves you the trouble of installing the hydra CLI' },
              { loc: [14, 15], note: 'OAuth2 Client Credentials Flow' },
              { loc: [16, 17], note: 'OAuth2 Access Token!' },
              { loc: [18, 19], note: 'hydra token validate --skip-tls-verify <token>' },
              { loc: [21, 22] },
              { loc: [22, 26] },
              { loc: [26, 27] },
              { loc: [27, 28] },
              { loc: [28, 29] },
              { loc: [29, 30] },
              { loc: [30, 31] },
              { loc: [18 + 15, 19 + 15] },
              { loc: [19 + 15, 35 + 15] },
              { loc: [28 + 15, 29 + 15] },
              { loc: [29 + 15, 30 + 15] },
              { loc: [30 + 15, 31 + 15] }
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Live Demo
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              So what is OpenID Connect, exactly?
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Scenario: You run a financial app
            </Heading>
            <Appear>
              <Heading size={2} caps>
                you allow people to sign in via google
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.substitution[0]} transition={["fade"]} />
          <Slide bgImage={images.substitution[1]} transition={["fade"]} />
          <Slide bgImage={images.substitution[2]} transition={["fade"]} />

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              ID Token
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Features
            </Heading>
            <List>
              <Appear><ListItem>Delegate Authentication!</ListItem></Appear>
              <Appear><ListItem>Flows for services, web apps and mobile apps.</ListItem></Appear>
              <Appear><ListItem>Various interactions: Force password confirm, force 2FA, ...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Questions?
            </Heading>
            <List>
              <Appear><ListItem>Read Hydra Guide and API Docs</ListItem></Appear>
              <Appear><ListItem>Ask in Mailinglist</ListItem></Appear>
              <Appear><ListItem>Ask in Chat</ListItem></Appear>
              <Appear><ListItem>Create issue on GitHub</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Thank you for your time!
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Twitter: @_aeneasr</ListItem></Appear>
              <Appear><ListItem>GitHub: @arekkas</ListItem></Appear>
              <Appear><ListItem>Web: aeneas.io</ListItem></Appear>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}


//
// <Slide transition={["zoom"]} bgColor="primary">
//   <Heading size={1} fit caps lineHeight={1} textColor="black">
//     What is Redux and why?
//   </Heading>
// </Slide>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={'(previousState, action) => newState'}
//   ranges={[
//     { loc: [0, 1] },
//   ]}/>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Heading size={1} fit caps lineHeight={1} textColor="white">
//     Say again...?
//   </Heading>
// </Slide>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Appear fid="1">
//     <Heading size={1} caps fit textColor="primary">
//       Let's look at some bad practices first in ...
//     </Heading>
//   </Appear>
//   <Appear fid="2">
//     <Heading size={1} caps fit textColor="tertiary">
//       jQuery
//     </Heading>
//   </Appear>
// </Slide>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/jquery")}
//   ranges={[
//     { loc: [0, 7] },
//     { loc: [7, 10] },
//     { loc: [11, 16] }
//   ]}/>
//
// <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//   <List>
//     <Appear><ListItem>DOM is not a good place to store state</ListItem></Appear>
//     <Appear><ListItem>There is no consistent view of the state</ListItem></Appear>
//     <Appear><ListItem>We don't really know what caused the current state</ListItem></Appear>
//     <Appear><ListItem>What happens in a large application with WebSockets, AJAX ...?</ListItem></Appear>
//     <Appear><ListItem>In a team, how do you keep track of everything and train people?</ListItem></Appear>
//   </List>
// </Slide>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Appear fid="1">
//     <Heading size={1} caps fit textColor="primary">
//       Let's look at some bad practices first in ...
//     </Heading>
//   </Appear>
//   <Appear fid="2">
//     <Heading size={1} caps fit textColor="tertiary">
//       Angular
//     </Heading>
//   </Appear>
// </Slide>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/angular")}
//   ranges={[
//     { loc: [0, 7] },
//     { loc: [11, 15] }
//   ]}/>
//
// <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//   <List>
//     <Appear><ListItem>State is kept inside of a controller</ListItem></Appear>
//     <Appear><ListItem>In real life 10% is local scope, 90% is shared state</ListItem></Appear>
//     <Appear><ListItem>Bad: Global state using the rootScope</ListItem></Appear>
//     <Appear><ListItem>Bad: Global state using eventbus with side effects</ListItem></Appear>
//     <Appear><ListItem>Bad: Global state using global, services, you name it</ListItem></Appear>
//   </List>
// </Slide>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Appear fid="1">
//     <Heading size={1} caps fit textColor="primary">
//       The rescue
//     </Heading>
//   </Appear>
//   <Appear fid="2">
//     <Heading size={1} caps fit textColor="tertiary">
//       REDUX
//     </Heading>
//   </Appear>
// </Slide>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/redux-1")}
//   ranges={[
//     { loc: [0, 7], note: 'A company has a global knowledge management, called the store' },
//     { loc: [9, 13], note: 'CEO decides new directive: everyone must wear appropriate clothes' },
//     { loc: [14, 15], note: 'CEO makes directive public' },
//     { loc: [16, 28], note: 'Departments decide what to do' },
//     { loc: [29, 37], note: 'CEO can always see what\'s happening' },
//     { loc: [38, 39], note: 'CEO resigns.' },
//   ]}/>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Heading size={1} fit caps lineHeight={1} textColor="white">
//     In real life...
//   </Heading>
// </Slide>
//
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/redux-3")}
//   ranges={[
//     { loc: [0, 2] },
//     { loc: [2, 15], note: 'a list of all reducers' },
//     { loc: [4, 9], note: 'greeting reducer' },
//     { loc: [10, 15], note: 'some other reducer' },
//     { loc: [17, 21], note: 'state => react element props' },
//     { loc: [22, 27] }
//   ]}/>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/redux-2")}
//   ranges={[
//     { loc: [0, 2] },
//     { loc: [3, 8] },
//     { loc: [9, 13], note: 'this is an action creator' },
//     { loc: [14, 15], note: 'return the greeting state' },
//     { loc: [16, 19], note: 'state => react element props' },
//     { loc: [20, 23], note: 'action dispatchers => react element props' },
//     { loc: [24, 25], note: 'link mappers and react element' }
//   ]}/>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Heading size={1} fit caps lineHeight={1} textColor="white">
//     Get the skeleton!
//   </Heading>
//   <Appear fid="1">
//     <Heading size={1} caps fit textColor="tertiary">
//       github.com/serlo-org
//     </Heading>
//   </Appear>
//   <Appear fid="2">
//     <Heading size={1} caps fit textColor="tertiary">
//       hack-night-03-react
//     </Heading>
//   </Appear>
// </Slide>


//
//           <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
//             <Appear fid="1">
//               <Heading size={1} caps fit textColor="primary">
//                 Full Width
//               </Heading>
//             </Appear>
//             <Appear fid="2">
//               <Heading size={1} caps fit textColor="tertiary">
//                 Adjustable Darkness
//               </Heading>
//             </Appear>
//             <Appear fid="3">
//               <Heading size={1} caps fit textColor="primary">
//                 Background Imagery
//               </Heading>
//             </Appear>
//           </Slide>
//           <Slide transition={["zoom", "fade"]} bgColor="primary">
//             <Heading caps fit>Flexible Layouts</Heading>
//             <Layout>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Left
//                 </Heading>
//               </Fill>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Right
//                 </Heading>
//               </Fill>
//             </Layout>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="black">
//             <BlockQuote>
//               <Quote>Wonderfully formatted quotes</Quote>
//               <Cite>Ken Wheeler</Cite>
//             </BlockQuote>
//           </Slide>
//           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
//             <Heading caps fit size={1} textColor="primary">
//               Inline Markdown
//             </Heading>
//             <Markdown>
//               {`
// ![Markdown Logo](${images.markdown.replace("/", "")})
//
// You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
// * Lists too!
// * With ~~strikethrough~~ and _italic_
// * And lets not forget **bold**
//               `}
//             </Markdown>
//           </Slide>
//           <Slide transition={["slide", "spin"]} bgColor="primary">
//             <Heading caps fit size={1} textColor="tertiary">
//               Smooth
//             </Heading>
//             <Heading caps fit size={1} textColor="secondary">
//               Combinable Transitions
//             </Heading>
//           </Slide>
//           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//             <List>
//               <Appear><ListItem>Inline style based theme system</ListItem></Appear>
//               <Appear><ListItem>Autofit text</ListItem></Appear>
//               <Appear><ListItem>Flexbox layout system</ListItem></Appear>
//               <Appear><ListItem>React-Router navigation</ListItem></Appear>
//               <Appear><ListItem>PDF export</ListItem></Appear>
//               <Appear><ListItem>And...</ListItem></Appear>
//             </List>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="primary">
//             <Heading size={1} caps fit textColor="tertiary">
//               Your presentations are interactive
//             </Heading>
//             <Interactive/>
//           </Slide>
//           <Slide transition={["spin", "slide"]} bgColor="tertiary">
//             <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
//               Made with love in Seattle by
//             </Heading>
//             <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
//           </Slide>