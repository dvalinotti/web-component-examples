import { Host, Component, h, State } from '@stencil/core';
import { User } from '../../types';

@Component({
  // HTML tag name
  tag: 'dv-button',
  // CSS path
  styleUrls: ['dv-button.css'],
  // Use native shadow-dom encapsulation
  shadow: true,
  // Use scoped stylesheets
  scoped: false
})
export class DvButton {
  @State() user: User;
  @State() userId: number = 0;

  getUserData(id: number): Promise<any> {
    return fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: [User]) => {
        this.user = data[id]
        return data[id]
      })
      .catch((err) => {
        console.log(err);
        return undefined
      })
  }

  generateNewId(prev: number) {
    const newId = Math.floor(Math.random() * 9);
    if (newId === prev) {
      return this.generateNewId(prev);
    } return newId;
  }

  handleClick(e: MouseEvent) {
    e.preventDefault();
    this.userId = this.generateNewId(this.userId);
    this.getUserData(this.userId);
  }

  // Async data load in lifecycle method
  componentWillLoad() {
    return this.getUserData(this.userId);
  }

  render() {
    return (
      <Host>
        <button onClick={(e) => this.handleClick(e)}>
          Get new User
        </button>
        <dv-user user={this.user} />
      </Host>
    );
  }

}
