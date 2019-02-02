import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  // ensure(value){
  //   if (value === undefined) throw 'undef';
  //   return value;
  // }

  render() {
    return (
      <div class='app-home'>
        {/* <div>
          <p>Solving puzzle 
            <a href='https://www.testdome.com/questions/21948?generatorId=20&questionIds=21948%2C13651%2C13919%2C7282&type=FromTest'>Ensure</a>
          </p>
          <p>{this.ensure(undefined)}</p>
          <p>{this.ensure('sss')}</p>
        </div> */}

        <div>
          <stencil-route-link url='/profile/stencil'>
            <button>Profile page</button>
          </stencil-route-link>
        </div>
        <div>
          <stencil-route-link url='/ensure'>
            <button>Ensure</button>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
