#pragma strict

public var speed : float;

function Update () {
	transform.Rotate(new Vector3(15,45,45), speed * Time.deltaTime);
}