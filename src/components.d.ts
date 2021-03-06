/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface AppEnsure {}
  interface AppEnsureAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRemoveProperty {}
  interface AppRemovePropertyAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppSemantics {}
  interface AppSemanticsAttributes extends StencilHTMLAttributes {}

  interface AppTest {}
  interface AppTestAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppEnsure': Components.AppEnsure;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRemoveProperty': Components.AppRemoveProperty;
    'AppRoot': Components.AppRoot;
    'AppSemantics': Components.AppSemantics;
    'AppTest': Components.AppTest;
  }

  interface StencilIntrinsicElements {
    'app-ensure': Components.AppEnsureAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-remove-property': Components.AppRemovePropertyAttributes;
    'app-root': Components.AppRootAttributes;
    'app-semantics': Components.AppSemanticsAttributes;
    'app-test': Components.AppTestAttributes;
  }


  interface HTMLAppEnsureElement extends Components.AppEnsure, HTMLStencilElement {}
  var HTMLAppEnsureElement: {
    prototype: HTMLAppEnsureElement;
    new (): HTMLAppEnsureElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRemovePropertyElement extends Components.AppRemoveProperty, HTMLStencilElement {}
  var HTMLAppRemovePropertyElement: {
    prototype: HTMLAppRemovePropertyElement;
    new (): HTMLAppRemovePropertyElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSemanticsElement extends Components.AppSemantics, HTMLStencilElement {}
  var HTMLAppSemanticsElement: {
    prototype: HTMLAppSemanticsElement;
    new (): HTMLAppSemanticsElement;
  };

  interface HTMLAppTestElement extends Components.AppTest, HTMLStencilElement {}
  var HTMLAppTestElement: {
    prototype: HTMLAppTestElement;
    new (): HTMLAppTestElement;
  };

  interface HTMLElementTagNameMap {
    'app-ensure': HTMLAppEnsureElement
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-remove-property': HTMLAppRemovePropertyElement
    'app-root': HTMLAppRootElement
    'app-semantics': HTMLAppSemanticsElement
    'app-test': HTMLAppTestElement
  }

  interface ElementTagNameMap {
    'app-ensure': HTMLAppEnsureElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-remove-property': HTMLAppRemovePropertyElement;
    'app-root': HTMLAppRootElement;
    'app-semantics': HTMLAppSemanticsElement;
    'app-test': HTMLAppTestElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
