import Navbar from './navbar';

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