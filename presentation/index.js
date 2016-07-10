// Import React
import React from 'react'
import { Appear, BlockQuote, Deck, Heading, Image, ListItem, List, Slide, Spectacle } from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

// Import Spectacle Core tags

// Import image preloader util

// Import theme

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

//
const images = {
  java: require('../assets/java-gc.png'),
  go: require('../assets/go-gc.png'),
  gocompile: require('../assets/gocompile.png'),
  clojure: require('../assets/clojure.png'),
};
//
preloader(images);

const theme = createTheme({
  primary: 'black',
  secondary: "#ff4081",
  important: '#FFC43D'
});

let last = 0
const next = (len = 1, off = 0) => {
  const ret = [last + off, last + len + off]
  last = last + len + off
  return ret
}
const start = (len = 1) => {
  last = len
  return [0, len]
}
const same = (len = 1, offset = 1) => [last - offset, last + len - offset]

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme} bgColor="black">
        <Deck transition={["zoom", "slide"]} transitionDuration={500} bgColor="black">

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Google Go
            </Heading>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <BlockQuote textColor="white">
              The goals of the Go project were to eliminate the slowness and clumsiness of software development at
              Google, and thereby to make the process more productive and scalable. The language was designed by and for
              people who write—and read and debug and maintain—large software systems.
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Who uses it?
            </Heading>
            <Appear>
              <Heading size={6} caps fit textColor="white">
                Everyone
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} caps fit textColor="white">
                Docker, Cloud Foundry, Cloudflare, Youtube, Kubernetes, GitHub, Facebook, Twitter, IBM, Netflix,
                OpenShift ...
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <BlockQuote textColor="white">"How We Went from 30 Servers to 2: Go" - iron.io</BlockQuote>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <BlockQuote textColor="white">"How We Moved Our API From Ruby to Go and Saved Our Sanity" -
              parse.com</BlockQuote>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <BlockQuote textColor="white">"Java is the COBOL of my generation and Go is its successor" -
              influxdata.com (InfluxDB)</BlockQuote>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              My experience with Go (2+ years)
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="black" textColor="secondary">
            <List>
              <Appear><ListItem>Incredible garbage collection</ListItem></Appear>
              <Appear><ListItem>Superb concurrency</ListItem></Appear>
              <Appear><ListItem>Awesome tooling, ease of use</ListItem></Appear>
              <Appear><ListItem>Go forces you to think about errors</ListItem></Appear>
              <Appear><ListItem>Incredibly fast compilation</ListItem></Appear>
              <Appear><ListItem>Low memory and CPU footprint</ListItem></Appear>
              <Appear><ListItem>Well designed standard library and API with close to zero BC breaks</ListItem></Appear>
              <Appear><ListItem>Runs everywhere (mainframes, android and ios included)</ListItem></Appear>
              <Appear><ListItem>Dependency management is tricky, but tooling has become much better</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Garbage Collection
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Image width="100%" style={{marginTop: "-150px"}} src={images.java}/>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Image width="100%" style={{marginTop: "-150px"}} src={images.go}/>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Concurrency
            </Heading>
            <Appear>
              <Heading size={6} fit textColor="white">
                Say goodbye to λ, promise and other nightmares
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            code={require("raw!../assets/go-channels")}
            lang="go"
            ranges={[
              { loc: start() },
              { loc: next(1,1) },
              { loc: next(1,1) },
              { loc: next(1) }
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Tooling
            </Heading>
            <Appear>
              <Heading size={6} fit textColor="white">
                Developers are humans, too - really!
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} fit textColor="white">
                Great UX = Happy Devs = Better software faster
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              One dependency to rule them all
            </Heading>
            <Appear>
              <Heading size={6} fit textColor="white">
                go1.6.2.msi
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            code={require("raw!../assets/go-basics")}
            lang="bash"
            ranges={[
              { loc: start(), title: 'Go tooling' },
              { loc: next(2) },
              { loc: next(1,1) },
              { loc: next(2,1) },
              { loc: next(1,1) },
              { loc: next(1,1) },
              { loc: next(2,1) },
              { loc: next(2,1) },
              { loc: next(4,1) },
              { loc: next(2,1) },
              { loc: next(1,1) },
              { loc: next(1,1) }
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Compile time
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Image width="100%" src={images.clojure} />
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Image width="100%" src={images.gocompile} />
          </Slide>

          <CodeSlide
            transition={[]}
            code={require("raw!../assets/go-compile")}
            lang="bash"
            ranges={[
              { loc: start(3) },
              { loc: next(5, 1) }
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              TOMORROW
            </Heading>
            <Appear>
              <Heading size={6} caps fit textColor="secondary">
                LEARN GO
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Can't wait?
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit textColor="white">
              play.golang.org
            </Heading>
            <Appear>
              <Heading size={6} fit textColor="white">
                tour.golang.org
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} fit textColor="white">
                gobyexample.com
              </Heading>
            </Appear>
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