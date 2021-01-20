import React from 'react';

export const FullDescription = (props) => {
  const { user } = props;
  return (
    <div>
      <h1>
        {user.firstname} {user.lastname}
      </h1>
      <div>
        <img src={user.picture} alt={user.lastname} />
      </div>

      <ul className="marker">
        {user.description && (
          <li>
            <strong>Description: </strong>
            {user.description}
          </li>
        )}

        {user.diploma && (
          <li>
            <strong>Diploma: </strong>
            {user.diploma}
          </li>
        )}
        {user.activity_area_id && (
          <li>
            <strong>activity_area_id: </strong>
            {user.activity_area_id}
          </li>
        )}
        {user.awailability && (
          <li>
            <strong>Awailability: </strong>
            {user.awailability}
          </li>
        )}
        {user.mobility && (
          <li>
            <strong>Mobility: </strong>
            {user.mobility}
          </li>
        )}
        {user.years_of_experiment && (
          <li>
            <strong>Years of experiment: </strong>
            {user.years_of_experiment}
          </li>
        )}
        {user.mail && (
          <li>
            <strong>Mail: </strong>
            {user.mail}
          </li>
        )}
        {user.open_to_formation && (
          <li>
            <strong>Open to formation: </strong>
            {user.open_to_formation}
          </li>
        )}
        {user.cv && (
          <li>
            <strong>CV: </strong>
            {user.cv}
          </li>
        )}
        {user.linkedin && (
          <li>
            <strong>Linkedin: </strong>
            {user.linkedin}
          </li>
        )}
        {user.youtube && (
          <li>
            <strong>Youtube: </strong>
            {user.youtube}
          </li>
        )}
      </ul>
    </div>
  );
};

class SingleUserFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
    };
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
    } = this.props;
    if (pathname !== prevProps.location.pathname) {
      this.getCards();
    }
  }

  componentDidMount = () => {
    this.getCard();
  };

  getCard = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.setState({ card: [] });

    const options = {
      method: 'GET',
      url: `https://api-hearthstone.woozy.fr/v1/cards/single/id/${id}`,
    };

    const result = await axios
      .request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        log(error);
      });

    this.setState({ card: result });
  };

  render() {
    const { card } = this.state;

    return (
      <div className="background">
        <div className="research-container">
          <DisplayCard card={card} />
        </div>
      </div>
    );
  }
}
