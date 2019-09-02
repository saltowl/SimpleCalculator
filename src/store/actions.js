export const mapStateToProps = (state) => {
    return {
        currentString: state.rootReducer.currentString,
        result: state.rootReducer.result,
        input: state.rootReducer.input
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {};
};