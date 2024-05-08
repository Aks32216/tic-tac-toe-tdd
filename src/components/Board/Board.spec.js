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

describe('testing functionality of board',()=>{
    it('should Next player move be X when move is even',()=>{
        render(<Board />);
        const boardCellButton=screen.getAllByRole('button');
        for(let i=0;i<6;++i){
            if(i%2==0){
                const nextPlayerMustBeXWhenMoveEven=screen.getByTestId('next-player-status');
                expect(nextPlayerMustBeXWhenMoveEven).toHaveTextContent('Next player: X');
            }
            const nextSquare=screen.getByTestId(`square-${i}`);
            fireEvent.click(nextSquare)
        }
    })

    it('should Next player move be O when move is odd',()=>{
        render(<Board />);
        const boardCellButton=screen.getAllByRole('button');
        for(let i=0;i<6;++i){
            if(i%2==1){
                const nextPlayerMustBeXWhenMoveEven=screen.getByTestId('next-player-status');
                expect(nextPlayerMustBeXWhenMoveEven).toHaveTextContent('Next player: O');
            }
            const nextSquare=screen.getByTestId(`square-${i}`);
            fireEvent.click(nextSquare)
        }
    })


    // created a scenario of clicks where X would win using the moves array
    it('should declare X winner',()=>{
        render(<Board />);
        let moves=[0,2,4,5,8];
        for(let i=0;i<moves.length;++i){
            const nextSquare=screen.getByTestId(`square-${moves[i]}`);
            fireEvent.click(nextSquare);
        }
        const nextPlayerMustBeXWhenMoveEven=screen.getByTestId('next-player-status');
        expect(nextPlayerMustBeXWhenMoveEven).toHaveTextContent("Winner: X");
    })

    // created a scenario of clicks where O would win using the moves array
    it('should declare O winner',()=>{
        render(<Board />);
        let moves=[0,2,4,5,6,8];
        for(let i=0;i<moves.length;++i){
            const nextSquare=screen.getByTestId(`square-${moves[i]}`);
            fireEvent.click(nextSquare);
        }
        const nextPlayerMustBeXWhenMoveEven=screen.getByTestId('next-player-status');
        expect(nextPlayerMustBeXWhenMoveEven).toHaveTextContent("Winner: O");
    })

    // create a scenario of clicks where game would end in a draw
    it('should game end in a draw',()=>{
        render(<Board />);
        let moves=[0,3,7,6,2,1,5,8,4];
        for(let i=0;i<moves.length;++i){
            const nextSquare=screen.getByTestId(`square-${moves[i]}`);
            fireEvent.click(nextSquare);
        }
        const nextPlayerMustBeXWhenMoveEven=screen.getByTestId('next-player-status');
        expect(nextPlayerMustBeXWhenMoveEven).toHaveTextContent("Draw");
    })
})

