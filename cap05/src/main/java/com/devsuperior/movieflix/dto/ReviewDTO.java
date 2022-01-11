package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.Objects;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@NotBlank(message = "Campo requerido")
	private String text;
	private Long movieId;
	private UserDTO user;
	
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text) {
		this.id = id;
		this.text = text;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		user = new UserDTO(entity.getUser());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id, movieId, user);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ReviewDTO other = (ReviewDTO) obj;
		return Objects.equals(id, other.id) && Objects.equals(movieId, other.movieId)
				&& Objects.equals(user, other.user);
	}

	@Override
	public String toString() {
		return "ReviewDTO [id=" + id + ", text=" + text + ", movieId=" + movieId + ", user=" + user.getName() + "]";
	}

	
}
