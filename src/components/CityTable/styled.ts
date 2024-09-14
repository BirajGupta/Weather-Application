import styled from 'styled-components';

export const TableContainerComp = styled.div`
  height : 67vh;
  overflow-y : scroll;
  border-radius : 10px;

  p{
    color : red;
    text-align : center;
    margin-top : 5px;
  }

  table {
   border-spacing: 0;
   border: 1px solid #0001;
   width : 100%;
   background-color : ${({ theme }:{theme : any}) => theme.panelBgColor};
   box-shadow : rgba(0, 0, 0, 0.1) 0px 1px 3px;
   color: rgb(114, 126, 142);
   border-radius : 10px;
   tr {
     :last-child {
       td {
         border-bottom: 0;
         text-align:center;
       }
     }
   }

   th,
   td {
     padding: 0.5rem;
     border-bottom: 1px solid #0001;
     border-right: 1px solid #0001;
     text-align:center;

     :last-child {
       border-right: 0;
     }
   }

   tr:hover{
    background-color : ${({ theme }:{theme : any}) => theme.hoverSingleBackgroundColor};
    cursor : pointer;
   }

   th {
     background-color : ${({ theme }:{theme : any}) => theme.panelBgColor};
     border-bottom: 3px solid blue;
     color: ${({ theme }:{theme : any}) => theme.color};
     fontWeight: bold;
   }

   thead {
     background-color : ${({ theme }:{theme : any}) => theme.panelBgColor};
   }
 }
`;
