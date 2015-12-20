import Layout from '/client/components/layout';

import Home from '/client/components/home';

DocHead.setTitle("Tuneslap");
DocHead.addMeta({ name:"viewport", content:"width=device-width, initial-scale=1" });

FlowRouter.route('/', {
    action() {
        ReactLayout.render(Layout, {
            content: <Home />
        });
    }
});