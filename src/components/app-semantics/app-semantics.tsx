import { Component } from '@stencil/core';

@Component({
  tag: 'app-semantics',
  //styleUrl: 'app-semantics.css',
  shadow: true
})
export class AppSemantics {

  render() {
    return (
      <div class='app-semantics'>
        <div>
          <p>Solving puzzle <span>
              <a href='https://www.testdome.com/questions/html-css/semantics/13919?type=FromTest&generatorId=20&questionIds=21948%2c13651%2c13919%2c7282'>Semantics</a></span>
          </p>
          <p><a href="https://www.w3schools.com/html/html5_semantic_elements.asp">Ref</a></p>
        </div>

        <section>
          <h1>Lorem Ipsum</h1>
          
          <figure>
            <img src="https://goo.gl/zF9eky" alt="Lorem Ipsum"/>
            <figcaption>Lorem Ipsum</figcaption>
          </figure>
          
          <details>
            <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</summary>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Curabitur vitae hendrerit mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris lacinia scelerisque nibh nec gravida. 
              Duis malesuada nec nibh sit amet pulvinar. 
              Phasellus congue porttitor arcu, ut suscipit nibh aliquam vel. 
              Nunc arcu lectus, egestas ut sem ac, euismod porttitor eros. 
              Phasellus tincidunt consequat pharetra. Maecenas sodales purus at nulla finibus dapibus. 
              Nullam varius at nisl vel euismod. Fusce aliquet ligula non tempor fermentum. 
              Nam fermentum posuere mauris, quis aliquam nibh dictum sed.</p>
          </details>
        </section>
      </div>
    );
  }
}
