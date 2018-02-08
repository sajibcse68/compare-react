import React, { Component } from 'react';
import './Home.css'
class Home extends Component {
    
    render() {
      let heading = 'Soaring to new heights';
      let subheading = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                      <div className="container">
                        <h1 className="title">{ heading }</h1>
                        <div className="is-two-thirds column is-paddingless">
                          <h2 className="subtitle is-4">{ subheading }</h2>
                        </div>
                        <a className="button is-large is-primary" id="learn">Learn more</a>
                      </div>
                    </div>
                </section>

                <section class="section">
                    <div class="container">
                      <div class="columns pd is-desktop">
                        <div class="column is-1 has-text-centered">
                          <i class="fa fa-cog is-primary"></i>
                        </div>
                        <div class="column is-one-third-desktop">
                          <p class="title"><strong>We provide superior logistics so that your business can succeed in a crazy world.</strong></p>
                        </div>
                        <div class="column">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                      </div>
                    </div>

                    <div class="columns pd">
                      <div class="column">
                        <div class="card">
                          <div class="card-content">
                            <p class="title">"I think it's an absolutely excellent tool for our business. I can't survive without this thing."</p>
                            <p class="subtitle">- Gary Simon</p>
                          </div>
                        </div>
                      </div>
                      <div class="column">
                        <div class="card">
                          <div class="card-content">
                            <p class="title">"I think it's an absolutely excellent tool for our business. I can't survive without this thing."</p>
                            <p class="subtitle">- Gary Simon</p>
                          </div>
                        </div>
                      </div>
                      <div class="column">
                        <div class="card">
                          <div class="card-content">
                            <p class="title">"I think it's an absolutely excellent tool for our business. I can't survive without this thing."</p>
                            <p class="subtitle">- Gary Simon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
