const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    if (props.loading) {
      return (
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="spinner-border text-warning" role="status" style={{ width: 48, height: 48 }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
    return <Component {...props} />;
  }
  return ComponentWithLoading;
};

export default withLoading;