import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service'
import { GitSearch } from '../git-search'

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  
  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit(): void {
    this.GitSearchService.gitSearch('python').then( (response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText);

    })

    this.GitSearchService.gitSearchUsers('Rohit').then( (response) => {
      alert("Total Users Found: " + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);

    })
  }

  gitSearch = (query: string) => {
    this.GitSearchService.gitSearch(query).then( (response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText);

    })
    
  }

  gitSearchUsers = (query: string) => {
    this.GitSearchService.gitSearchUsers(query).then( (response) => {
      alert("Total Users Found: " + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);

    })

  }

}
