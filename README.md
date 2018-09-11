## 
## Build with replay

https://facebook.github.io/relay/


## Graphcool

https://www.graph.cool/


API from graph
https://api.graph.cool/relay/v1/cjlx9m9171crg0124m00mguvm


reply with babel

`yarn add  babel-plugin-react-relay`

Change the config file

`webpack.config.dev.js`

Look for cache dir `cacheDirectory: true,` to `false`

#make it do not cache the scheme for reply

Add plugins for package.json
`"babel": {
     "plugins" : ["react-relay"],
     "presets": [
       "react-app"
     ]
   },`

#Set Graphql in the build and run script

` "start": " GRAPHQL_ENDPOINT=https://api.graph.cool/relay/v1/cjlx9m9171crg0124m00mguvm  node scripts/start.js",
     "build": "GRAPHQL_ENDPOINT=https://api.graph.cool/relay/v1/cjlx9m9171crg0124m00mguvm node scripts/build.js",`


#On Windows

`set GRAPHQL_ENDPOINT=https://api.graph.cool/relay/v1/cjlx9m9171crg0124m00mguvm
`
##SPA with React Router V3 , V4 wont work

`yarn add react-router@3.0.2`
