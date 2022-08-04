export class ListTemplate {
    constructor(c) {
        this.container = c;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        li.className = 'border p-3 mb-3';
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        h4.className = 'text-capitalize m-0 mb-2';
        li.appendChild(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        p.className = 'm-0';
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
