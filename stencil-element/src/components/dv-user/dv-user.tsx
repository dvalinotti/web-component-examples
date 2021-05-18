import { Component, Host, h, Prop } from '@stencil/core';
import { User } from '../../types';

@Component({
  tag: 'dv-user',
  styleUrl: 'dv-user.css',
  shadow: true,
})
export class DvUser {
  @Prop() user: User;

  render() {
    const { id, name, username, email } = this.user;
    return (
      <Host>
        <div class="user-grid">
          <div class="key">
            ID
          </div>
          <div class="value">
            {id}
          </div>
          <div class="key">
            Name
          </div>
          <div class="value">
            {name}
          </div>
          <div class="key">
            Username
          </div>
          <div class="value">
            {username}
          </div>
          <div class="key">
            Email
          </div>
          <div class="value">
            {email}
          </div>
        </div>
      </Host>
    );
  }

}
