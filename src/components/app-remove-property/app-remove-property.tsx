import { Component } from '@stencil/core';

interface Person {
  firstName: string;
  lastName:  string;
}

@Component({
  tag: 'app-remove-property',
  //styleUrl: 'app-remove-property.css',
  shadow: true
})
export class AppRemoveProperty {

  getUser(): Person{
    let user: Person = {
      firstName: "Malcolm",
      lastName:  "Reynolds"
    };
    return user;
  }
  
  removeProperty(obj: any, prop: any) {
    let val = obj[prop];
    console.log(val);
    if (val === undefined) {
      return false;
    }
    delete obj[prop];
    return true;
  }
  removePropertyString(obj, prop) {
    let retVal = this.removeProperty(obj, prop);
    return retVal.toString();
  }
  /** https://www.electrictoolbox.com/pad-number-zeroes-javascript/ */
  pad(number, length) {
   
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
  }
  formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    let date = new Date(userDate);
    let retVal = date.getFullYear().toString() + this.pad((date.getMonth()+1),2) + this.pad(date.getDate(),2);
    return retVal;
  }
  render() {
    return (
      <div class='app-remove-property'>
        <div>
          <p>Solving puzzle <span>
              <a href='https://www.testdome.com/questions/11883?generatorId=16&questionIds=21948%2C11883%2C13919&type=FromTest'>RemoveProperty</a></span>
          </p>
          <p>{this.removePropertyString(this.getUser(),'firstName')}</p>
        </div>

        <div>
          <p>Solving puzzle <span>
              <a href='https://www.testdome.com/questions/8521?generatorId=14&questionIds=21948%2C11883%2C8521&type=FromTest'>formatDate</a></span>
          </p>
          <p>{this.formatDate("1/3/2014")}</p>
        </div>

      </div>
    );
  }
}
