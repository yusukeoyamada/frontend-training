import * as React from 'react';

class Ranking extends React.Component {
  componentWillMount() {
    this.props.onMount(this.props.categoryId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId)
    }
  }

  render() {
    const { category, ranking, error } = this.props;
    return (
      <div>
        <h2>
          {
            typeof category !== 'undefined'
              ? `${category.name}のランキング`
              : ''
          }
        </h2>
        {
          (() => {
            if (error) {
              return <p>エラーが発生しました。リロードして下さい。</p>;
            } else if (typeof ranking === 'undefined') {
              return <p>読み込み中...</p>;
            } else {
              return (
                <ol>
                  {
                    ranking.map(item => {
                      return (
                        <li key={`ranking-item-${item.code}`}>
                          <img alt={item.name} src={item.imageUrl} />
                          <a href={item.url} target="_blank">{item.name}</a>
                        </li>
                      );
                    })
                  }
                </ol>
              );
            }
          })()
        }
      </div>
    );
  }
}

Ranking.defaultProps = {
  categoryId: '1',
};

export default Ranking;
