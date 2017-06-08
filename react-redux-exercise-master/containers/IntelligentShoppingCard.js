import { connect } from 'react-redux';
import ShoppingCard from '../components/ShoppingCard';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        stock: state.shoppingCard.stock,
        disabled: state.shoppingCard.disabled,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        comprarItem: (stock) => {
            dispatch(actions.comprarItem(stock));
        },
        agregarItem: (stock) => {
            dispatch(actions.agregarItem(stock));
        }
    };
};

const IntelligentShoppingCard = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShoppingCard);

export default IntelligentShoppingCard;
