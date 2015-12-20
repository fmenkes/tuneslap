import Navbar from './navbar.import';

export default React.createClass({
    render () {
        return (
            <div>
                <Navbar />
                <div className="container">
                    {this.props.content}
                </div>
            </div>
        );
    }
});