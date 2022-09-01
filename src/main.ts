document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   

		<table id="table1">

			<thead>
				<tr>
					<th>Table 1 - Head</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						Table 1 - Value 1
					</td>
				</tr>
				<tr>
						<td>
							Table 1 - Value 2
						</td>
					</tr>
			</tbody>

		</table>


			<table id="table2">
	
				<thead>
					<tr>
						<th>Table 2 - Head</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Table 2 - Value 1
						</td>
					</tr>
					<tr>
							<td>
								Table 2 - Value 2
							</td>
						</tr>
						<tr>
								<td>
									Table 2 - Value 3
								</td>
							</tr>
				</tbody>
	
			</table>
	
		</div>

	
  </div>
`

export {}
