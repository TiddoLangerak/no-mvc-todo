import onInsert from '@tiddo/on-insert';
import mixup from '@tiddo/mixup';
import html, { unsafe } from '@tiddo/html-template';
import setHtmlContent from '@tiddo/set-html-content';

const asTodoList = mixup(el => {
	return {
		el,
		items : []
	}
});


function render(el) {
	const list = asTodoList(el);

	console.log("Setting html content");
	setHtmlContent(el, html`<ul>
		${list.items.map(item => html`
			<li>${item}</li>
		`)}
	</ul>`);
}

export function addItem(el, item) {
	const list = asTodoList(el);
	list.items.push(item);
	render(el);
}

onInsert('todo-list', el => {
	render(el);
});

