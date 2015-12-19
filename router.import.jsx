import Layout from '/components/layout';

import Home from '/components/home';

DocHead.setTitle("Meteor");
DocHead.addMeta({ name:"viewport", content:"width=device-width, initial-scale=1" });

FlowRouter.route('/', {
    action() {
        ReactLayout.render(Layout, {
            content: <Home />
        });
    }
});