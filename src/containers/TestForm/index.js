import React, { useState, useEffect } from 'react';

import bloques from '../../api/mocks/bloques';
import ItemFormContainer from '../ItemForm';

const BlockForm = (props) => {
    const [block, setBlock] = useState({ items: [] });
    const [itemCount, setItemCount] = useState(0);
    const [isVisibleWaiting, setIsVisibleWaiting] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        setBlock(props.block);
    }, [props.block])

    const onItemAnswered = (key, answerTime) => {
        var newAnswers = [...answers, {  key, answerTime }];
        setAnswers(newAnswers);

        if (itemCount + 1 < block.items.length) {
            setIsVisibleWaiting(true);
            setTimeout(() => {
                setItemCount(itemCount + 1);
                setIsVisibleWaiting(false);
            }, 500);
        } else if (props.onBlockFinished) {
            props.onBlockFinished(newAnswers);
        }
    }
    const renderWaiting = () => {
        return <div>WAITING...</div>;
    }

    const renderItemForm = () => {
        if (block == null) { return <div></div>; }
        if (block.items.length < 0) {}

        return (
            <div>
                <div className="p-offset-3 p-col-6">
                    <h4>{block.name}</h4>
                </div>
                <ItemFormContainer 
                    leftTitle={block.leftTitle} 
                    rightTitle={block.rightTitle} 
                    item={block.items[itemCount]}
                    onItemAnswered={onItemAnswered}
                    />
            </div>
        )
    }
    return isVisibleWaiting ? renderWaiting() : renderItemForm();
}

const TestForm = (props) => {
    const [blockCount, setBlockCount] = useState(0);
    const [isTransitionVisible, setIsTransitionVisible] = useState(false);
    const [bloquesOutput, setBloquesOutput] = useState([]);

    const renderPreview = () => {
        return (
        <div>
            
        </div>
        )
    }


  const renderBlockTransition = () => {
    return (
        <div className="p-grid p-align-center">
          <div className="p-offset-3 p-col-6">
            <h1></h1>
              <div className="lobby-button">
                <a type="button" onClick={() => startNewBlock()}>
                  <span>
                    PRESIONA LA TECLA 
                    <strong>A</strong>  O <strong>ESTE BOTON</strong> 
                    PARA CONTINUAR
                  </span>
                </a>
              </div>
          </div>
        </div>
    )
  };

    const onBlockFinished = (answers) => {
        var bloque = bloques[blockCount];
        var newBloque = { name: bloque.name, answers };
        var newBloquesOutput = [...bloquesOutput, newBloque];
        setBloquesOutput(newBloquesOutput);
        setIsTransitionVisible(true);
        if (blockCount + 1 >= bloques.length) {
            if (props.onTestFinished != null) {
                props.onTestFinished(newBloquesOutput);
            }
        } //else {
        //     setIsTransitionVisible(true);
        // }
    }

    const startNewBlock = () => {
        setBlockCount(blockCount + 1);
        setIsTransitionVisible(false);
    }

    const renderBlockForm = (blockCount) => {
        return <BlockForm block={bloques[blockCount]} onBlockFinished={onBlockFinished}></BlockForm>;
    }
    
    return isTransitionVisible ? renderBlockTransition() : renderBlockForm(blockCount);
}

export default TestForm;