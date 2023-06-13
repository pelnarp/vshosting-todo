import { NgModule } from '@angular/core';
import {
  TodoListComponent,
} from './todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';
import { FilterTodosPipe } from './filter-todos.pipe';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    TodoListComponent,
    CommonModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    TodoItemComponent,
    TodoEditorComponent,
    FilterTodosPipe
  ],

  declarations: [],
  exports: [
    TodoListComponent,
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    TodoItemComponent,
    MatCheckboxModule,
    TodoEditorComponent,
    FilterTodosPipe
  ],
})
export class CommonUiModule {}
