/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {Platform} from './platform';


@NgModule({
  providers: [Platform]
})
export class PlatformModule {}


export * from './platform';
export * from './features';
