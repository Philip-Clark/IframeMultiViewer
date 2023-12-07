import React, { useContext, useEffect, useState } from 'react';
import './ViewSwitcher.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { ViewContext } from '../../App';

function ViewSwitcher() {
  const { decks, deck, setDeck, controllerOpen } = useContext(ViewContext);
  const [name, setName] = useState(decks.length > 0 ? decks[deck].getName() : '');
  useEffect(() => {
    setName(decks[deck].getName());
  }, [deck]);

  useEffect(() => {
    setName(decks[deck].getName());
  }, [controllerOpen]);
  const nextView = () => {
    if (deck + 1 > decks.length - 1) return setDeck(0);
    return setDeck(deck + 1);
  };
  const lastView = () => {
    if (deck - 1 < 0) return setDeck(decks.length - 1);
    return setDeck(deck - 1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    decks[deck].setName(event.target.value);
  };

  return (
    <div className="viewSwitcher">
      <FaChevronLeft onClick={nextView} />
      <input className="tabTitle" value={name} onChange={handleNameChange} />
      <FaChevronRight onClick={lastView} />
    </div>
  );
}

export default ViewSwitcher;
