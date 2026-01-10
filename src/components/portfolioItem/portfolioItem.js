import './portfolioItem.css';

const PortfolioItem = ({ id, src, title, onToggle, isActive }) => {
  return (
    <div className={`project ${isActive ? 'active' : ''}`}>
      <div className="project__header" onClick={onToggle}>
        {title}
      </div>

      <div className="project__body">
        {isActive && (
          <div className="iframe-wrapper">
            <iframe
              src={src}
              title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;







