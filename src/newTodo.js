import onInsert from '@tiddo/on-insert';
import html from '@tiddo/html-template';

onInsert('new-todo', el => {
	el.innerHTML = html`
		<input type="text" placeholder="What's to do?" /><button>Add</button>
	`;
	const input = el.querySelector('input');
	el.querySelector('button').addEventListener('click', () => {
		const text = input.value;
		input.value = '';
		el.dispatchEvent(new CustomEvent('new-todo', { detail : text }));
	});
});
