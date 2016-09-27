import onInsert from '@tiddo/on-insert';
import html from '@tiddo/html-template';

import { addItem } from './todoList';
import './newTodo';

onInsert('todo-app', el => {
	el.innerHTML = html`
		<todo-list></todo-list>
		<new-todo></new-todo>
	`;

	el.querySelector('new-todo').addEventListener('new-todo', ({ detail }) => {
		addItem(el.querySelector('todo-list'), detail);
	});
});
