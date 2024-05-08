import { fireEvent, render, screen } from "@testing-library/react";
import Board from "./Board.js";
import Square from "../Square/Square.js";

describe('Rendering of board component',()=>{

    it('should render 9 square inside board',()=>{
        render(<Board />);
        const boardCellButton=screen.getAllByRole('button');
        expect(boardCellButton.length).toEqual(9);
    })

    it('should have 3 rows',()=>{
        render(<Board />);
        const boardRows=screen.getAllByTestId('board-row')
        expect(boardRows.length).toBe(3);
    })

    it('should render empty square cells',()=>{
        render(<Board />);
        const boardCellButton=screen.getAllByRole('button');
        for(let i=0;i<boardCellButton.length;++i){
            expect(boardCellButton[i].value).toBe("");
        }
    })

    it('should render Next player: X on loading',()=>{
        render(<Board />);
        const nextPlayerMustBeX=screen.getByTestId('next-player-status');
        expect(nextPlayerMustBeX).toHaveTextContent('Next player: X')
    })

    it('should render Next player: O after first move',()=>{
        render(<Board />);
        const square0=screen.getByTestId('square-0');
        fireEvent.click(square0);
        const nextPlayerMustBeO=screen.getByTestId('next-player-status');
        expect(nextPlayerMustBeO).toHaveTextContent('Next player: O')
    })
})

