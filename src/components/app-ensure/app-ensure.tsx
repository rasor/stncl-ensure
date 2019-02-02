import { Component } from '@stencil/core';

@Component({
  tag: 'app-ensure',
  styleUrl: 'app-ensure.css',
  shadow: true
})
export class AppEnsure {

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
        <div>
          <p>Solving puzzle <span>
              <a href='https://www.testdome.com/questions/21948?generatorId=20&questionIds=21948%2C13651%2C13919%2C7282&type=FromTest'>Ensure</a></span>
          </p>
          <p>{this.showEnsure(undefined)}</p>
          <p>{this.ensure('sss')}</p>
        </div>

      </div>
    );
  }
}
