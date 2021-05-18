import { Component, Host, h, Prop, Fragment } from '@stencil/core';
import { User } from '../../types';

@Component({
  tag: 'dv-user',
  styleUrl: 'dv-user.css',
  shadow: true,
})
export class DvUser {
  @Prop() user: User;

  render() {
    const keyValuePairs = Object.entries(this.user);
    return (
      <Host>
        <div class="user-grid">
          {keyValuePairs.map(([key, value]) => {
            if (typeof value !== 'object') {
              return (
                <Fragment>
                  <div class="key">
                    {key}
                  </div><div class="value">
                    {value}
                  </div>
                </Fragment>
              )
            }
          })}
        </div>
      </Host>
    );
  }

}
