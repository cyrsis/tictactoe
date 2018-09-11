import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import  NavDrawer  from "../components/NavDrawer";
import Relay from 'react-relay'



class Template extends Component {


    render() {


        return (

            <div>


                <NavDrawer

                    auth={this.props.route.auth}
                    authenticated={this.props.viewer.user}
                />
                <Header>
                    TicTacTuring
                </Header>
                <Main>
                    {this.props.children}
                </Main>

            </div>

        );
    }
}


export default Relay.createContainer(
    Template, {
        fragments: {
            viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            id
          }
        }
      `,
        }
    }
)
