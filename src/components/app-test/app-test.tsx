import { Component } from '@stencil/core';

@Component({
  tag: 'app-test',
  styleUrl: 'app-test.css',
  shadow: true
})
export class AppTest {

  ensure(value){
    if (value === undefined) throw 'undef';
    return value;
  }
  showEnsure(value){
    try {
      return this.ensure(value);
    } catch (error) {
      return error;
    }
  }

  render() {
    return (
      <div class='app-ensure'>

        <hr></hr>
        <div>
          <h3>Solving puzzle <span>
              <a href='https://www.testdome.com/'>Test</a></span>
          </h3>
          <p>{this.showEnsure(undefined)}</p>
          <p>{this.ensure('sss')}</p>
        </div>

      </div>
    );
  }
}
